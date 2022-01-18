FROM node:lts

RUN npm i -g npm@latest

COPY ./.docker/entrypoints/frontend.entrypoint.sh /frontend.entrypoint.sh
RUN chmod +x /frontend.entrypoint.sh
ENTRYPOINT ["/frontend.entrypoint.sh"]