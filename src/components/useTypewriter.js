import { useState, useEffect, useRef } from 'react'

/**
 * Cycles through an array of words with a typewriter effect.
 * Returns the current display string.
 *
 * @param {string[]} words       - words to cycle through
 * @param {number}   typeSpeed   - ms per character when typing   (default 80)
 * @param {number}   deleteSpeed - ms per character when deleting (default 45)
 * @param {number}   pauseAfter  - ms to pause after full word is typed (default 1800)
 */
export default function useTypewriter(
  words,
  typeSpeed   = 80,
  deleteSpeed = 45,
  pauseAfter  = 1800,
) {
  const [display,  setDisplay]  = useState('')
  const [wordIdx,  setWordIdx]  = useState(0)
  const [charIdx,  setCharIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = words[wordIdx % words.length]

    const tick = () => {
      if (!deleting) {
        // typing
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          // finished typing — pause then start deleting
          timeoutRef.current = setTimeout(() => setDeleting(true), pauseAfter)
          setCharIdx(c => c + 1)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        // deleting
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(w => w + 1)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }

    // don't schedule another tick if we already set a pause timeout
    if (deleting || charIdx < words[wordIdx % words.length].length) {
      timeoutRef.current = setTimeout(tick, deleting ? deleteSpeed : typeSpeed)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [charIdx, deleting, wordIdx, words, typeSpeed, deleteSpeed, pauseAfter])

  return display
}
