docker run -it -p 4000:4000 \
-v $(pwd):/srv/jekyll \
jekyll/builder \
/bin/bash -c \
"gem install webrick && \
jekyll serve --watch --force_polling"