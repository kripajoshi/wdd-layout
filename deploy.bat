git checkout --orphan gh-pages
CALL npm run build
git --work-tree dist add --all
git --work-tree dist commit -m "gh-pages"
git push origin HEAD:gh-pages --force
rd /s /q dist
git checkout -f main
git branch -D gh-pages