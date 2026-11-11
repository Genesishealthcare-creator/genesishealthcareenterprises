import { useState, useEffect } from 'react'

/**
 * Endless typewriter: types a word, pauses, deletes it, then moves to the next
 * word (or repeats the same one) — forever.
 *
 * @param {string[]} words       words/phrases to cycle through
 * @param {number}   typeSpeed   ms per character while typing   (default 80)
 * @param {number}   deleteSpeed ms per character while deleting (default 45)
 * @param {number}   pauseAfter  ms to hold the full word        (default 1800)
 * @param {number}   pauseBefore ms to wait on an empty line before retyping (default 350)
 */
export default function useTypewriter(
  words,
  typeSpeed    = 80,
  deleteSpeed  = 45,
  pauseAfter   = 1800,
  pauseBefore  = 350,
) {
  const key = words.join('|')                 // stable dependency (inline arrays change identity each render)
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const [text,  setText]  = useState('')
  const [phase, setPhase] = useState('typing') // 'typing' | 'deleting'
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) return undefined         // show static text for users who prefer less motion

    const list = key.split('|')
    const word = list[index % list.length]
    let timer

    if (phase === 'typing') {
      if (text.length < word.length) {
        timer = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed)
      } else {
        timer = setTimeout(() => setPhase('deleting'), pauseAfter)   // full word shown → hold, then delete
      }
    } else if (text.length > 0) {
      timer = setTimeout(() => setText(word.slice(0, text.length - 1)), deleteSpeed)
    } else {
      timer = setTimeout(() => {                                     // empty → next word, type again
        setIndex(i => i + 1)
        setPhase('typing')
      }, pauseBefore)
    }

    return () => clearTimeout(timer)
  }, [text, phase, index, key, typeSpeed, deleteSpeed, pauseAfter, pauseBefore, reduceMotion])

  return reduceMotion ? key.split('|')[0] : text
}
