import { ActionType } from "../action-types";

interface ISearchRepoAction {
  type: ActionType.SEARCH_REPO;
}

interface ISearchRepoSuccess {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface ISearchRepoError {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action = ISearchRepoAction | ISearchRepoError | ISearchRepoSuccess;
