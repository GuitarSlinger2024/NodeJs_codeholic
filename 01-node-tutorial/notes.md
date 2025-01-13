#           Recovery
git diff [file name]                    shows the difference between current state of a file and it's last commit
git restore [file name]                 restores a file to it's last commit (includes deletions that aren't committed yet)
git restore --staged [file name]        removes a file from staging, the file stays the same.

#           Recover deleted files
git reflog                              This brings up a log history that will include the step before the file was deleted
git branch <name of new branch> #id     This creates a branch that is reset to the commit with the #id.

#           List and change branches
git branch --list                       list all branches, also shows the current branch.
git checkout [branch name]              change to another branch
git checkout -b [branch name]           create a new branch and change to it (all in one!)

#           Reset the last commit message
git commit --amend -n 'message'         fix the last commit message -
                                        Never change historey for commits that have already been pushed ot a remote repository

#           Reset to a previous state                                        
git reset --hard #id                    Delete everything after the commit with the #id.

#           Move your last commit to a new branch
git branch -b <name of branch>          Create and move to a new branch
git reset HEAD~1 --hard                 Delete

#           Chery-pick - commit to main on accident
git checkout <anme of brach>            Change to the brach the commit should be on
get cherry-pick #id                     This picks the commit with #id (from the main branch?)
git checkout main                       Change to main branch
git reset --hard HEAD~1                 Delete the last commit from the main branch

#           Interactive Rebase - do not change anything that has been pushed to the remote
git rebase -i HEAD~#                    The # is the number of steps to go back


