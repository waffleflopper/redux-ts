interface IRepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface ISearchRepoAction {
  type: "search_repositories";
}

interface ISearchRepoSuccess {
  type: "search_repositories_success";
  payload: string[];
}

interface ISearchRepoError {
  type: "search_repositories_error";
  payload: string;
}

const reducer = (
  state: IRepositoriesState,
  action: ISearchRepoAction | ISearchRepoError | ISearchRepoSuccess
): IRepositoriesState => {
  switch (action.type) {
    case "search_repositories":
      return { loading: true, error: null, data: [] };
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
