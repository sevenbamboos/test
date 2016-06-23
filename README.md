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
git reflog //commit id for revert
git reset --hard xxx //commit id or HEAD^ or HEAD^^
git checkout -- filename //revert local file which has not been **added**
git reset HEAD filename && git checkout -- filename //revert local file that has been **added** and then revert the change in work copy
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
