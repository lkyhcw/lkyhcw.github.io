#!/bin/bash

REMOVE_CACHE=("_site" ".jekyll-cache" ".sass-cache")
for cache_dir in ${REMOVE_CACHE[@]}
do
	if [ -d $cache_dir ]; then
		rm -rf $cache_dir
	fi
done

bundle exec jekyll serve --port 8080 --host 0.0.0.0
# bundle exec jekyll serve --port 8080
