import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStore, MobxResponse } from "../../../mobx";
import { makeObservable, override } from "mobx";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";

/** Query defines the gRPC querier service for gov module */
export interface Query {
  /** Proposal queries proposal details based on ProposalID. */
  proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;

  /** Proposals queries all proposals based on given status. */
  proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;

  /** Vote queries voted information based on proposalID, voterAddr. */
  vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;

  /** Votes queries votes of a given proposal. */
  votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;

  /** Params queries all parameters of the gov module. */
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;

  /** Deposit queries single deposit information based proposalID, depositAddr. */
  deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;

  /** Deposits queries all deposits of a single proposal. */
  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;

  /** TallyResult queries the tally of a proposal vote. */
  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }

  proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new _m0.Reader(data)));
  }

  proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse> {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
    return promise.then(data => QueryProposalsResponse.decode(new _m0.Reader(data)));
  }

  vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new _m0.Reader(data)));
  }

  votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
    return promise.then(data => QueryVotesResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  deposit(request: QueryDepositRequest): Promise<QueryDepositResponse> {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
    return promise.then(data => QueryDepositResponse.decode(new _m0.Reader(data)));
  }

  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
  }

  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
      return queryService.proposal(request);
    },

    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse> {
      return queryService.proposals(request);
    },

    vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
      return queryService.vote(request);
    },

    votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
      return queryService.votes(request);
    },

    params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    deposit(request: QueryDepositRequest): Promise<QueryDepositResponse> {
      return queryService.deposit(request);
    },

    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.deposits(request);
    },

    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
      return queryService.tallyResult(request);
    }

  };
};
export const createRpcQueryStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  class QueryProposalStore extends QueryStore<QueryProposalRequest, QueryProposalResponse> {
    constructor() {
      super(queryService?.proposal);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    proposal(request: QueryProposalRequest): MobxResponse<QueryProposalResponse> {
      return this.getData(request);
    }

  }

  class QueryProposalsStore extends QueryStore<QueryProposalsRequest, QueryProposalsResponse> {
    constructor() {
      super(queryService?.proposals);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    proposals(request: QueryProposalsRequest): MobxResponse<QueryProposalsResponse> {
      return this.getData(request);
    }

  }

  class QueryVoteStore extends QueryStore<QueryVoteRequest, QueryVoteResponse> {
    constructor() {
      super(queryService?.vote);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    vote(request: QueryVoteRequest): MobxResponse<QueryVoteResponse> {
      return this.getData(request);
    }

  }

  class QueryVotesStore extends QueryStore<QueryVotesRequest, QueryVotesResponse> {
    constructor() {
      super(queryService?.votes);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    votes(request: QueryVotesRequest): MobxResponse<QueryVotesResponse> {
      return this.getData(request);
    }

  }

  class QueryParamsStore extends QueryStore<QueryParamsRequest, QueryParamsResponse> {
    constructor() {
      super(queryService?.params);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    params(request: QueryParamsRequest): MobxResponse<QueryParamsResponse> {
      return this.getData(request);
    }

  }

  class QueryDepositStore extends QueryStore<QueryDepositRequest, QueryDepositResponse> {
    constructor() {
      super(queryService?.deposit);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    deposit(request: QueryDepositRequest): MobxResponse<QueryDepositResponse> {
      return this.getData(request);
    }

  }

  class QueryDepositsStore extends QueryStore<QueryDepositsRequest, QueryDepositsResponse> {
    constructor() {
      super(queryService?.deposits);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    deposits(request: QueryDepositsRequest): MobxResponse<QueryDepositsResponse> {
      return this.getData(request);
    }

  }

  class QueryTallyResultStore extends QueryStore<QueryTallyResultRequest, QueryTallyResultResponse> {
    constructor() {
      super(queryService?.tallyResult);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    tallyResult(request: QueryTallyResultRequest): MobxResponse<QueryTallyResultResponse> {
      return this.getData(request);
    }

  }

  return {
    /** Proposal queries proposal details based on ProposalID. */
    QueryProposalStore,

    /** Proposals queries all proposals based on given status. */
    QueryProposalsStore,

    /** Vote queries voted information based on proposalID, voterAddr. */
    QueryVoteStore,

    /** Votes queries votes of a given proposal. */
    QueryVotesStore,

    /** Params queries all parameters of the gov module. */
    QueryParamsStore,

    /** Deposit queries single deposit information based proposalID, depositAddr. */
    QueryDepositStore,

    /** Deposits queries all deposits of a single proposal. */
    QueryDepositsStore,

    /** TallyResult queries the tally of a proposal vote. */
    QueryTallyResultStore
  };
};