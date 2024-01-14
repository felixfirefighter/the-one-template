export interface ServerSideComponentProps<Params, SearchParams = undefined> {
  params: Params;
  searchParams: SearchParams;
}