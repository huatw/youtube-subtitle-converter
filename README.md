# youtube-subtitle

### usage:
```shell
git clone <..>
yarn install
yarn run example
# copy and run the dist bundle file in the devtool console.
```

### output:
1. CC subtitle, if possible;
2. auto-generated srt, with information on the accuracy of each word.

### workflow:
1. parse DOM: XML string => timedtext XML 
2. transform AST: timedtext XML => JSON object
3. generate string: JSON object => multi-format subtitle (ass, srt...)

### todos:
1. generate to ass
2. integrate to web UI interface




