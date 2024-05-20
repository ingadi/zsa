import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"
import {
  createServerActionsKeyFactory,
  setupServerActionHooks,
} from "../../../../packages/zsa-react-query/dist/index.cjs"

export const QueryKeyFactory = createServerActionsKeyFactory({
  getPosts: () => ["getPosts"],
  getFriends: () => ["getFriends"],
  getPostsAndFriends: () => ["getPosts", "getFriends"],
  somethingElse: (id: string) => [id],
  getRandomNumber: () => ["getRandomNumber"],
})

const {
  useServerActionQuery,
  useServerActionMutation,
  useServerActionInfiniteQuery,
} = setupServerActionHooks({
  hooks: {
    useQuery: useQuery,
    useMutation: useMutation,
    useInfiniteQuery: useInfiniteQuery,
  },
  queryKeyFactory: QueryKeyFactory,
})

export {
  useServerActionInfiniteQuery,
  useServerActionMutation,
  useServerActionQuery,
}
