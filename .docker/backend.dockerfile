FROM denoland/deno:latest

COPY ./.docker/entrypoints/backend.entrypoint.sh /backend.entrypoint.sh
RUN chmod +x /backend.entrypoint.sh
ENTRYPOINT ["/backend.entrypoint.sh"]