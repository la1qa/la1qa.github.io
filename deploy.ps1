param(
    [Parameter(Mandatory=$true)]
    [string]$Message
)

Write-Host "Adding files..." -ForegroundColor Cyan
git add .

Write-Host "Committing..." -ForegroundColor Cyan
git commit -m $Message

Write-Host "Pushing to remote..." -ForegroundColor Cyan
git push

Write-Host "Deploying to GitHub Pages..." -ForegroundColor Cyan
npm run deploy

Write-Host "Done!" -ForegroundColor Green
