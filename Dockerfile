FROM drxos/node
MAINTAINER Hodonou SOUNTON (drxos <sounton@gmail.com>)
RUN apt-get update && apt-get upgrade -y
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 8000
CMD ["npm", "start"]