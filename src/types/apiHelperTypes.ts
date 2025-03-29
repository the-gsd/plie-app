export type getRequestParamTypes = {
  url: string;
  token?: boolean;
};

export type postRequestParamTypes = {
  url: string;
  data: any;
  token?: boolean;
};

export type patchRequestParamTypes = {
  url: string;
  data: any;
  token?: boolean;
};

export type deleteRequestParamTypes = {
  url: string;
  token?: boolean;
};
