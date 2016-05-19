# Git 
* Config
git config --global user.name "xxx" 
git config --global user.email "xxx@yyy"
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
git config --list //~\.gitconfig
* Check in
git init
git status
git add .
git commit -m "xxx"
* Revert
git reflog //看commit id便于revert
git reset --hard xxx //commit id 或者HEAD^后一个版本, HEAD^^ 后两个版本
git checkout -- filename //revert没有**add**到本地的file
git reset HEAD filename && git checkout -- filename //撤销**add**到本地的file, 然后再撤销本地变化
* Change
git rm xxx
git mv xxx yyy
* Branch
git checkout -b xxx // git branch xxx && git checkout xxx
git merge xxx
git branch -d xxx //delete branch

# Github
* Generate SSH key
ssh-keygen -t rsa -C"mail" //id_rsa and id_rsa.pub
ssh -T github.com
* .ssh/config
Host github.com
User git
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
* Upload
git remote add origin https://github.com/sevenbamboos/test.git
git push origin master
git pull origin master
