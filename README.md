# Git setup helper a.k.a `ggg`
Helper for setup git repo locally via SSH:
* Creates SSH-key
* Edits SSH config with necessary settings for profile
* Clones Git repo
* Sets up user name and email in repository

# Installation
1. Open (or create) file `~/.ssh/config`, for example with VSCode:
```shell
$ code ~/.ssh/config
```
2. Copy content of [ssh_config_header](./assets/ssh_config_header) into the opened file.
3. Save `ggg` file onto your home directory.
4. Add alias Run in shell
```shell
$ ALIAS_CMD='alias ggg="~/ggg"'; grep "$ALIAS_CMD" ~/.bashrc || echo "$ALIAS_CMD" >> ~/.bashrc; source ~/.bashrc; chmod 0777 ~/ggg
```


# Usage
1. Just
```shell
$ ggg
```
That's all! Now just follow instructions on the screen.

2. With specified parameters
```shell
$ ggg <email> <repository_link_or_command>
```
If a repo cloning command contains spaces - put it in quotes! For example:
```shell
$ ggg developer@gmail.com "git clone https://github.com/facebook/react.git"
```
or just
```shell
$ ggg developer@gmail.com https://github.com/facebook/react.git
```

3. Check help for more details
```shell
$ ggg --help
```

