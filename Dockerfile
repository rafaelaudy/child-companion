FROM node:lts-bookworm-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --no-frozen-lockfile
RUN pnpm run --filter=./apps/api -r build
RUN pnpm deploy --filter=./apps/api --prod ./prod/api

FROM base AS api
COPY --from=build /usr/src/app/prod/api ./prod/api
WORKDIR /prod/api
EXPOSE 8000
CMD [ "pnpm", "build" ]

# FROM base AS app2
# COPY --from=build app/prod/app2 /prod/app2
# WORKDIR /prod/app2
# EXPOSE 8001
# CMD [ "pnpm", "start" ]