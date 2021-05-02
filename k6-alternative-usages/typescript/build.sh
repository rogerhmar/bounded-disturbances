#!/usr/bin/env bash
for n in $(ls -A1 tests/*.ts)
do
    echo "Working on $n file name"
    
    jsSub=$(echo "$n" | sed "s/tests[/]//" | sed "s/.ts//")
    echo "$jsSub"

    yarn webpack ./$n -c webpack.config.js -o dist/$jsSub
    # do something on $n below, say count line numbers
    # wc -l "$n"
done
