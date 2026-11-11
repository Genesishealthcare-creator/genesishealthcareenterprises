# Auto-commit and push any changes to GitHub (main).
# Pushing to main also triggers the Vercel deployment.
# Safety: skips the push if the production build fails, so a broken site is never deployed.

$ErrorActionPreference = 'Continue'
$env:GIT_TERMINAL_PROMPT = '0'

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

# Nothing to do?
$changes = git status --porcelain 2>$null
if (-not $changes) { Write-Output 'auto-push: no changes.'; exit 0 }

# Never auto-commit anything that looks like a secret file
$secrets = $changes | Where-Object { $_ -match '(^|[\\/ ])(\.env(\..*)?|.*\.pem|.*\.key|id_rsa.*|credentials.*\.json)$' }
if ($secrets) {
  Write-Output "auto-push: refusing to commit possible secret files:`n$($secrets -join "`n")"
  exit 0
}

# Build check
$build = npx vite build 2>&1 | Out-String
if ($LASTEXITCODE -ne 0) {
  Write-Output "auto-push: build FAILED, nothing pushed.`n$build"
  exit 0
}

git add -A 2>$null | Out-Null

$files = (git diff --cached --name-only 2>$null) -join ', '
if (-not $files) { exit 0 }
$stamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
$short = if ($files.Length -gt 160) { $files.Substring(0, 157) + '...' } else { $files }

git -c user.name='Genesis Health Care Enterprises' -c user.email='info@genesishealthcareenterprises.com' `
    commit -q -m "Auto-update $stamp" -m "Changed: $short" 2>&1 | Out-Null

$out = git push origin main 2>&1 | Out-String
if ($LASTEXITCODE -eq 0) { Write-Output "auto-push: pushed to GitHub ($stamp)." }
else { Write-Output "auto-push: push failed.`n$out" }
exit 0
