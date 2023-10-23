import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.gamm.v1beta1";
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPool {
  sender: string;
  poolId: bigint;
  shareOutAmount: string;
  tokenInMaxs: Coin[];
}
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPoolSDKType {
  sender: string;
  pool_id: bigint;
  share_out_amount: string;
  token_in_maxs: CoinSDKType[];
}
export interface MsgJoinPoolResponse {
  shareOutAmount: string;
  tokenIn: Coin[];
}
export interface MsgJoinPoolResponseSDKType {
  share_out_amount: string;
  token_in: CoinSDKType[];
}
/** ===================== MsgExitPool */
export interface MsgExitPool {
  sender: string;
  poolId: bigint;
  shareInAmount: string;
  tokenOutMins: Coin[];
}
/** ===================== MsgExitPool */
export interface MsgExitPoolSDKType {
  sender: string;
  pool_id: bigint;
  share_in_amount: string;
  token_out_mins: CoinSDKType[];
}
export interface MsgExitPoolResponse {
  tokenOut: Coin[];
}
export interface MsgExitPoolResponseSDKType {
  token_out: CoinSDKType[];
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRoute {
  poolId: bigint;
  tokenOutDenom: string;
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRouteSDKType {
  pool_id: bigint;
  token_out_denom: string;
}
export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
  tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInSDKType {
  sender: string;
  routes: SwapAmountInRouteSDKType[];
  token_in: CoinSDKType;
  token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRoute {
  poolId: bigint;
  tokenInDenom: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRouteSDKType {
  pool_id: bigint;
  token_in_denom: string;
}
export interface MsgSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutRoute[];
  tokenInMaxAmount: string;
  tokenOut: Coin;
}
export interface MsgSwapExactAmountOutSDKType {
  sender: string;
  routes: SwapAmountOutRouteSDKType[];
  token_in_max_amount: string;
  token_out: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountIn {
  sender: string;
  poolId: bigint;
  tokenIn: Coin;
  shareOutMinAmount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountInSDKType {
  sender: string;
  pool_id: bigint;
  token_in: CoinSDKType;
  share_out_min_amount: string;
}
export interface MsgJoinSwapExternAmountInResponse {
  shareOutAmount: string;
}
export interface MsgJoinSwapExternAmountInResponseSDKType {
  share_out_amount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOut {
  sender: string;
  poolId: bigint;
  tokenInDenom: string;
  shareOutAmount: string;
  tokenInMaxAmount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOutSDKType {
  sender: string;
  pool_id: bigint;
  token_in_denom: string;
  share_out_amount: string;
  token_in_max_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponse {
  tokenInAmount: string;
}
export interface MsgJoinSwapShareAmountOutResponseSDKType {
  token_in_amount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountIn {
  sender: string;
  poolId: bigint;
  tokenOutDenom: string;
  shareInAmount: string;
  tokenOutMinAmount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountInSDKType {
  sender: string;
  pool_id: bigint;
  token_out_denom: string;
  share_in_amount: string;
  token_out_min_amount: string;
}
export interface MsgExitSwapShareAmountInResponse {
  tokenOutAmount: string;
}
export interface MsgExitSwapShareAmountInResponseSDKType {
  token_out_amount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOut {
  sender: string;
  poolId: bigint;
  tokenOut: Coin;
  shareInMaxAmount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOutSDKType {
  sender: string;
  pool_id: bigint;
  token_out: CoinSDKType;
  share_in_max_amount: string;
}
export interface MsgExitSwapExternAmountOutResponse {
  shareInAmount: string;
}
export interface MsgExitSwapExternAmountOutResponseSDKType {
  share_in_amount: string;
}
function createBaseMsgJoinPool(): MsgJoinPool {
  return {
    sender: "",
    poolId: BigInt(0),
    shareOutAmount: "",
    tokenInMaxs: []
  };
}
export const MsgJoinPool = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
  encode(message: MsgJoinPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.shareOutAmount !== "") {
      writer.uint32(26).string(message.shareOutAmount);
    }
    for (const v of message.tokenInMaxs) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.shareOutAmount = reader.string();
          break;
        case 4:
          message.tokenInMaxs.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinPool {
    const obj = createBaseMsgJoinPool();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.shareOutAmount)) obj.shareOutAmount = String(object.shareOutAmount);
    if (Array.isArray(object?.tokenInMaxs)) obj.tokenInMaxs = object.tokenInMaxs.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgJoinPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
    if (message.tokenInMaxs) {
      obj.tokenInMaxs = message.tokenInMaxs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenInMaxs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgJoinPool>): MsgJoinPool {
    const message = createBaseMsgJoinPool();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.shareOutAmount = object.shareOutAmount ?? "";
    message.tokenInMaxs = object.tokenInMaxs?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgJoinPoolSDKType): MsgJoinPool {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      shareOutAmount: object?.share_out_amount,
      tokenInMaxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgJoinPoolSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
      token_in_maxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgJoinPool): MsgJoinPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    obj.share_out_amount = message.shareOutAmount;
    if (message.tokenInMaxs) {
      obj.token_in_maxs = message.tokenInMaxs.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.token_in_maxs = [];
    }
    return obj;
  },
  fromAmino(object: MsgJoinPoolAmino): MsgJoinPool {
    return {
      sender: object.sender,
      poolId: BigInt(object.pool_id),
      shareOutAmount: object.share_out_amount,
      tokenInMaxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgJoinPool): MsgJoinPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.share_out_amount = message.shareOutAmount;
    if (message.tokenInMaxs) {
      obj.token_in_maxs = message.tokenInMaxs.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.token_in_maxs = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgJoinPoolAminoMsg): MsgJoinPool {
    return MsgJoinPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinPool): MsgJoinPoolAminoMsg {
    return {
      type: "osmosis/gamm/join-pool",
      value: MsgJoinPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinPoolProtoMsg): MsgJoinPool {
    return MsgJoinPool.decode(message.value);
  },
  toProto(message: MsgJoinPool): Uint8Array {
    return MsgJoinPool.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinPool): MsgJoinPoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
      value: MsgJoinPool.encode(message).finish()
    };
  }
};
function createBaseMsgJoinPoolResponse(): MsgJoinPoolResponse {
  return {
    shareOutAmount: "",
    tokenIn: []
  };
}
export const MsgJoinPoolResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
  encode(message: MsgJoinPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }
    for (const v of message.tokenIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;
        case 2:
          message.tokenIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinPoolResponse {
    const obj = createBaseMsgJoinPoolResponse();
    if (isSet(object.shareOutAmount)) obj.shareOutAmount = String(object.shareOutAmount);
    if (Array.isArray(object?.tokenIn)) obj.tokenIn = object.tokenIn.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgJoinPoolResponse): unknown {
    const obj: any = {};
    message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
    if (message.tokenIn) {
      obj.tokenIn = message.tokenIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenIn = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgJoinPoolResponse>): MsgJoinPoolResponse {
    const message = createBaseMsgJoinPoolResponse();
    message.shareOutAmount = object.shareOutAmount ?? "";
    message.tokenIn = object.tokenIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgJoinPoolResponseSDKType): MsgJoinPoolResponse {
    return {
      shareOutAmount: object?.share_out_amount,
      tokenIn: Array.isArray(object?.token_in) ? object.token_in.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgJoinPoolResponseSDKType {
    return {
      share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
      token_in: Array.isArray(object?.token_in) ? object.token_in.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgJoinPoolResponse): MsgJoinPoolResponseSDKType {
    const obj: any = {};
    obj.share_out_amount = message.shareOutAmount;
    if (message.tokenIn) {
      obj.token_in = message.tokenIn.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.token_in = [];
    }
    return obj;
  },
  fromAmino(object: MsgJoinPoolResponseAmino): MsgJoinPoolResponse {
    return {
      shareOutAmount: object.share_out_amount,
      tokenIn: Array.isArray(object?.token_in) ? object.token_in.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgJoinPoolResponse): MsgJoinPoolResponseAmino {
    const obj: any = {};
    obj.share_out_amount = message.shareOutAmount;
    if (message.tokenIn) {
      obj.token_in = message.tokenIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.token_in = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgJoinPoolResponseAminoMsg): MsgJoinPoolResponse {
    return MsgJoinPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseAminoMsg {
    return {
      type: "osmosis/gamm/join-pool-response",
      value: MsgJoinPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinPoolResponseProtoMsg): MsgJoinPoolResponse {
    return MsgJoinPoolResponse.decode(message.value);
  },
  toProto(message: MsgJoinPoolResponse): Uint8Array {
    return MsgJoinPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
      value: MsgJoinPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExitPool(): MsgExitPool {
  return {
    sender: "",
    poolId: BigInt(0),
    shareInAmount: "",
    tokenOutMins: []
  };
}
export const MsgExitPool = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
  encode(message: MsgExitPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.shareInAmount !== "") {
      writer.uint32(26).string(message.shareInAmount);
    }
    for (const v of message.tokenOutMins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.shareInAmount = reader.string();
          break;
        case 4:
          message.tokenOutMins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitPool {
    const obj = createBaseMsgExitPool();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.shareInAmount)) obj.shareInAmount = String(object.shareInAmount);
    if (Array.isArray(object?.tokenOutMins)) obj.tokenOutMins = object.tokenOutMins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgExitPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
    if (message.tokenOutMins) {
      obj.tokenOutMins = message.tokenOutMins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenOutMins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExitPool>): MsgExitPool {
    const message = createBaseMsgExitPool();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.shareInAmount = object.shareInAmount ?? "";
    message.tokenOutMins = object.tokenOutMins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgExitPoolSDKType): MsgExitPool {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      shareInAmount: object?.share_in_amount,
      tokenOutMins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgExitPoolSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : "",
      token_out_mins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgExitPool): MsgExitPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    obj.share_in_amount = message.shareInAmount;
    if (message.tokenOutMins) {
      obj.token_out_mins = message.tokenOutMins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.token_out_mins = [];
    }
    return obj;
  },
  fromAmino(object: MsgExitPoolAmino): MsgExitPool {
    return {
      sender: object.sender,
      poolId: BigInt(object.pool_id),
      shareInAmount: object.share_in_amount,
      tokenOutMins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgExitPool): MsgExitPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.share_in_amount = message.shareInAmount;
    if (message.tokenOutMins) {
      obj.token_out_mins = message.tokenOutMins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.token_out_mins = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgExitPoolAminoMsg): MsgExitPool {
    return MsgExitPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitPool): MsgExitPoolAminoMsg {
    return {
      type: "osmosis/gamm/exit-pool",
      value: MsgExitPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitPoolProtoMsg): MsgExitPool {
    return MsgExitPool.decode(message.value);
  },
  toProto(message: MsgExitPool): Uint8Array {
    return MsgExitPool.encode(message).finish();
  },
  toProtoMsg(message: MsgExitPool): MsgExitPoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
      value: MsgExitPool.encode(message).finish()
    };
  }
};
function createBaseMsgExitPoolResponse(): MsgExitPoolResponse {
  return {
    tokenOut: []
  };
}
export const MsgExitPoolResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
  encode(message: MsgExitPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokenOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitPoolResponse {
    const obj = createBaseMsgExitPoolResponse();
    if (Array.isArray(object?.tokenOut)) obj.tokenOut = object.tokenOut.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgExitPoolResponse): unknown {
    const obj: any = {};
    if (message.tokenOut) {
      obj.tokenOut = message.tokenOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokenOut = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExitPoolResponse>): MsgExitPoolResponse {
    const message = createBaseMsgExitPoolResponse();
    message.tokenOut = object.tokenOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgExitPoolResponseSDKType): MsgExitPoolResponse {
    return {
      tokenOut: Array.isArray(object?.token_out) ? object.token_out.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgExitPoolResponseSDKType {
    return {
      token_out: Array.isArray(object?.token_out) ? object.token_out.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgExitPoolResponse): MsgExitPoolResponseSDKType {
    const obj: any = {};
    if (message.tokenOut) {
      obj.token_out = message.tokenOut.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.token_out = [];
    }
    return obj;
  },
  fromAmino(object: MsgExitPoolResponseAmino): MsgExitPoolResponse {
    return {
      tokenOut: Array.isArray(object?.token_out) ? object.token_out.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgExitPoolResponse): MsgExitPoolResponseAmino {
    const obj: any = {};
    if (message.tokenOut) {
      obj.token_out = message.tokenOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.token_out = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgExitPoolResponseAminoMsg): MsgExitPoolResponse {
    return MsgExitPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitPoolResponse): MsgExitPoolResponseAminoMsg {
    return {
      type: "osmosis/gamm/exit-pool-response",
      value: MsgExitPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitPoolResponseProtoMsg): MsgExitPoolResponse {
    return MsgExitPoolResponse.decode(message.value);
  },
  toProto(message: MsgExitPoolResponse): Uint8Array {
    return MsgExitPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitPoolResponse): MsgExitPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
      value: MsgExitPoolResponse.encode(message).finish()
    };
  }
};
function createBaseSwapAmountInRoute(): SwapAmountInRoute {
  return {
    poolId: BigInt(0),
    tokenOutDenom: ""
  };
}
export const SwapAmountInRoute = {
  typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
  encode(message: SwapAmountInRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountInRoute {
    const obj = createBaseSwapAmountInRoute();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenOutDenom)) obj.tokenOutDenom = String(object.tokenOutDenom);
    return obj;
  },
  toJSON(message: SwapAmountInRoute): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<SwapAmountInRoute>): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromSDK(object: SwapAmountInRouteSDKType): SwapAmountInRoute {
    return {
      poolId: object?.pool_id,
      tokenOutDenom: object?.token_out_denom
    };
  },
  fromSDKJSON(object: any): SwapAmountInRouteSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_out_denom: isSet(object.token_out_denom) ? String(object.token_out_denom) : ""
    };
  },
  toSDK(message: SwapAmountInRoute): SwapAmountInRouteSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.token_out_denom = message.tokenOutDenom;
    return obj;
  },
  fromAmino(object: SwapAmountInRouteAmino): SwapAmountInRoute {
    return {
      poolId: BigInt(object.pool_id),
      tokenOutDenom: object.token_out_denom
    };
  },
  toAmino(message: SwapAmountInRoute): SwapAmountInRouteAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_out_denom = message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(object: SwapAmountInRouteAminoMsg): SwapAmountInRoute {
    return SwapAmountInRoute.fromAmino(object.value);
  },
  toAminoMsg(message: SwapAmountInRoute): SwapAmountInRouteAminoMsg {
    return {
      type: "osmosis/gamm/swap-amount-in-route",
      value: SwapAmountInRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: SwapAmountInRouteProtoMsg): SwapAmountInRoute {
    return SwapAmountInRoute.decode(message.value);
  },
  toProto(message: SwapAmountInRoute): Uint8Array {
    return SwapAmountInRoute.encode(message).finish();
  },
  toProtoMsg(message: SwapAmountInRoute): SwapAmountInRouteProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
      value: SwapAmountInRoute.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountIn(): MsgSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    tokenIn: Coin.fromPartial({}),
    tokenOutMinAmount: ""
  };
}
export const MsgSwapExactAmountIn = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
  encode(message: MsgSwapExactAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenOutMinAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountIn {
    const obj = createBaseMsgSwapExactAmountIn();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.routes)) obj.routes = object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e));
    if (isSet(object.tokenIn)) obj.tokenIn = Coin.fromJSON(object.tokenIn);
    if (isSet(object.tokenOutMinAmount)) obj.tokenOutMinAmount = String(object.tokenOutMinAmount);
    return obj;
  },
  toJSON(message: MsgSwapExactAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    if (object.tokenIn !== undefined && object.tokenIn !== null) {
      message.tokenIn = Coin.fromPartial(object.tokenIn);
    }
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    return message;
  },
  fromSDK(object: MsgSwapExactAmountInSDKType): MsgSwapExactAmountIn {
    return {
      sender: object?.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromSDK(e)) : [],
      tokenIn: object.token_in ? Coin.fromSDK(object.token_in) : undefined,
      tokenOutMinAmount: object?.token_out_min_amount
    };
  },
  fromSDKJSON(object: any): MsgSwapExactAmountInSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromSDKJSON(e)) : [],
      token_in: isSet(object.token_in) ? Coin.fromSDKJSON(object.token_in) : undefined,
      token_out_min_amount: isSet(object.token_out_min_amount) ? String(object.token_out_min_amount) : ""
    };
  },
  toSDK(message: MsgSwapExactAmountIn): MsgSwapExactAmountInSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.tokenIn !== undefined && (obj.token_in = message.tokenIn ? Coin.toSDK(message.tokenIn) : undefined);
    obj.token_out_min_amount = message.tokenOutMinAmount;
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn {
    return {
      sender: object.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromAmino(e)) : [],
      tokenIn: object?.token_in ? Coin.fromAmino(object.token_in) : undefined,
      tokenOutMinAmount: object.token_out_min_amount
    };
  },
  toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.token_out_min_amount = message.tokenOutMinAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoMsg {
    return {
      type: "osmosis/gamm/swap-exact-amount-in",
      value: MsgSwapExactAmountIn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountInProtoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountIn): Uint8Array {
    return MsgSwapExactAmountIn.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
      value: MsgSwapExactAmountIn.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountInResponse(): MsgSwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const MsgSwapExactAmountInResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
  encode(message: MsgSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountInResponse {
    const obj = createBaseMsgSwapExactAmountInResponse();
    if (isSet(object.tokenOutAmount)) obj.tokenOutAmount = String(object.tokenOutAmount);
    return obj;
  },
  toJSON(message: MsgSwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse {
    const message = createBaseMsgSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromSDK(object: MsgSwapExactAmountInResponseSDKType): MsgSwapExactAmountInResponse {
    return {
      tokenOutAmount: object?.token_out_amount
    };
  },
  fromSDKJSON(object: any): MsgSwapExactAmountInResponseSDKType {
    return {
      token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
    };
  },
  toSDK(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseSDKType {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount;
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse {
    return {
      tokenOutAmount: object.token_out_amount
    };
  },
  toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInResponseAminoMsg): MsgSwapExactAmountInResponse {
    return MsgSwapExactAmountInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAminoMsg {
    return {
      type: "osmosis/gamm/swap-exact-amount-in-response",
      value: MsgSwapExactAmountInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountInResponseProtoMsg): MsgSwapExactAmountInResponse {
    return MsgSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountInResponse): Uint8Array {
    return MsgSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
      value: MsgSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseSwapAmountOutRoute(): SwapAmountOutRoute {
  return {
    poolId: BigInt(0),
    tokenInDenom: ""
  };
}
export const SwapAmountOutRoute = {
  typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
  encode(message: SwapAmountOutRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountOutRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountOutRoute {
    const obj = createBaseSwapAmountOutRoute();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenInDenom)) obj.tokenInDenom = String(object.tokenInDenom);
    return obj;
  },
  toJSON(message: SwapAmountOutRoute): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<SwapAmountOutRoute>): SwapAmountOutRoute {
    const message = createBaseSwapAmountOutRoute();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenInDenom = object.tokenInDenom ?? "";
    return message;
  },
  fromSDK(object: SwapAmountOutRouteSDKType): SwapAmountOutRoute {
    return {
      poolId: object?.pool_id,
      tokenInDenom: object?.token_in_denom
    };
  },
  fromSDKJSON(object: any): SwapAmountOutRouteSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in_denom: isSet(object.token_in_denom) ? String(object.token_in_denom) : ""
    };
  },
  toSDK(message: SwapAmountOutRoute): SwapAmountOutRouteSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.token_in_denom = message.tokenInDenom;
    return obj;
  },
  fromAmino(object: SwapAmountOutRouteAmino): SwapAmountOutRoute {
    return {
      poolId: BigInt(object.pool_id),
      tokenInDenom: object.token_in_denom
    };
  },
  toAmino(message: SwapAmountOutRoute): SwapAmountOutRouteAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in_denom = message.tokenInDenom;
    return obj;
  },
  fromAminoMsg(object: SwapAmountOutRouteAminoMsg): SwapAmountOutRoute {
    return SwapAmountOutRoute.fromAmino(object.value);
  },
  toAminoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteAminoMsg {
    return {
      type: "osmosis/gamm/swap-amount-out-route",
      value: SwapAmountOutRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: SwapAmountOutRouteProtoMsg): SwapAmountOutRoute {
    return SwapAmountOutRoute.decode(message.value);
  },
  toProto(message: SwapAmountOutRoute): Uint8Array {
    return SwapAmountOutRoute.encode(message).finish();
  },
  toProtoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
      value: SwapAmountOutRoute.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountOut(): MsgSwapExactAmountOut {
  return {
    sender: "",
    routes: [],
    tokenInMaxAmount: "",
    tokenOut: Coin.fromPartial({})
  };
}
export const MsgSwapExactAmountOut = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
  encode(message: MsgSwapExactAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(26).string(message.tokenInMaxAmount);
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenInMaxAmount = reader.string();
          break;
        case 4:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountOut {
    const obj = createBaseMsgSwapExactAmountOut();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.routes)) obj.routes = object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e));
    if (isSet(object.tokenInMaxAmount)) obj.tokenInMaxAmount = String(object.tokenInMaxAmount);
    if (isSet(object.tokenOut)) obj.tokenOut = Coin.fromJSON(object.tokenOut);
    return obj;
  },
  toJSON(message: MsgSwapExactAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut {
    const message = createBaseMsgSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    if (object.tokenOut !== undefined && object.tokenOut !== null) {
      message.tokenOut = Coin.fromPartial(object.tokenOut);
    }
    return message;
  },
  fromSDK(object: MsgSwapExactAmountOutSDKType): MsgSwapExactAmountOut {
    return {
      sender: object?.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromSDK(e)) : [],
      tokenInMaxAmount: object?.token_in_max_amount,
      tokenOut: object.token_out ? Coin.fromSDK(object.token_out) : undefined
    };
  },
  fromSDKJSON(object: any): MsgSwapExactAmountOutSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromSDKJSON(e)) : [],
      token_in_max_amount: isSet(object.token_in_max_amount) ? String(object.token_in_max_amount) : "",
      token_out: isSet(object.token_out) ? Coin.fromSDKJSON(object.token_out) : undefined
    };
  },
  toSDK(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_in_max_amount = message.tokenInMaxAmount;
    message.tokenOut !== undefined && (obj.token_out = message.tokenOut ? Coin.toSDK(message.tokenOut) : undefined);
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut {
    return {
      sender: object.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromAmino(e)) : [],
      tokenInMaxAmount: object.token_in_max_amount,
      tokenOut: object?.token_out ? Coin.fromAmino(object.token_out) : undefined
    };
  },
  toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_in_max_amount = message.tokenInMaxAmount;
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutAminoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoMsg {
    return {
      type: "osmosis/gamm/swap-exact-amount-out",
      value: MsgSwapExactAmountOut.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountOutProtoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountOut): Uint8Array {
    return MsgSwapExactAmountOut.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
      value: MsgSwapExactAmountOut.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountOutResponse(): MsgSwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const MsgSwapExactAmountOutResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
  encode(message: MsgSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountOutResponse {
    const obj = createBaseMsgSwapExactAmountOutResponse();
    if (isSet(object.tokenInAmount)) obj.tokenInAmount = String(object.tokenInAmount);
    return obj;
  },
  toJSON(message: MsgSwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse {
    const message = createBaseMsgSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromSDK(object: MsgSwapExactAmountOutResponseSDKType): MsgSwapExactAmountOutResponse {
    return {
      tokenInAmount: object?.token_in_amount
    };
  },
  fromSDKJSON(object: any): MsgSwapExactAmountOutResponseSDKType {
    return {
      token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
    };
  },
  toSDK(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseSDKType {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount;
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse {
    return {
      tokenInAmount: object.token_in_amount
    };
  },
  toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutResponseAminoMsg): MsgSwapExactAmountOutResponse {
    return MsgSwapExactAmountOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAminoMsg {
    return {
      type: "osmosis/gamm/swap-exact-amount-out-response",
      value: MsgSwapExactAmountOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountOutResponseProtoMsg): MsgSwapExactAmountOutResponse {
    return MsgSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountOutResponse): Uint8Array {
    return MsgSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
      value: MsgSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgJoinSwapExternAmountIn(): MsgJoinSwapExternAmountIn {
  return {
    sender: "",
    poolId: BigInt(0),
    tokenIn: Coin.fromPartial({}),
    shareOutMinAmount: ""
  };
}
export const MsgJoinSwapExternAmountIn = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
  encode(message: MsgJoinSwapExternAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.shareOutMinAmount !== "") {
      writer.uint32(34).string(message.shareOutMinAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapExternAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.shareOutMinAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinSwapExternAmountIn {
    const obj = createBaseMsgJoinSwapExternAmountIn();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenIn)) obj.tokenIn = Coin.fromJSON(object.tokenIn);
    if (isSet(object.shareOutMinAmount)) obj.shareOutMinAmount = String(object.shareOutMinAmount);
    return obj;
  },
  toJSON(message: MsgJoinSwapExternAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.shareOutMinAmount !== undefined && (obj.shareOutMinAmount = message.shareOutMinAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgJoinSwapExternAmountIn>): MsgJoinSwapExternAmountIn {
    const message = createBaseMsgJoinSwapExternAmountIn();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.tokenIn !== undefined && object.tokenIn !== null) {
      message.tokenIn = Coin.fromPartial(object.tokenIn);
    }
    message.shareOutMinAmount = object.shareOutMinAmount ?? "";
    return message;
  },
  fromSDK(object: MsgJoinSwapExternAmountInSDKType): MsgJoinSwapExternAmountIn {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      tokenIn: object.token_in ? Coin.fromSDK(object.token_in) : undefined,
      shareOutMinAmount: object?.share_out_min_amount
    };
  },
  fromSDKJSON(object: any): MsgJoinSwapExternAmountInSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in: isSet(object.token_in) ? Coin.fromSDKJSON(object.token_in) : undefined,
      share_out_min_amount: isSet(object.share_out_min_amount) ? String(object.share_out_min_amount) : ""
    };
  },
  toSDK(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    message.tokenIn !== undefined && (obj.token_in = message.tokenIn ? Coin.toSDK(message.tokenIn) : undefined);
    obj.share_out_min_amount = message.shareOutMinAmount;
    return obj;
  },
  fromAmino(object: MsgJoinSwapExternAmountInAmino): MsgJoinSwapExternAmountIn {
    return {
      sender: object.sender,
      poolId: BigInt(object.pool_id),
      tokenIn: object?.token_in ? Coin.fromAmino(object.token_in) : undefined,
      shareOutMinAmount: object.share_out_min_amount
    };
  },
  toAmino(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.share_out_min_amount = message.shareOutMinAmount;
    return obj;
  },
  fromAminoMsg(object: MsgJoinSwapExternAmountInAminoMsg): MsgJoinSwapExternAmountIn {
    return MsgJoinSwapExternAmountIn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInAminoMsg {
    return {
      type: "osmosis/gamm/join-swap-extern-amount-in",
      value: MsgJoinSwapExternAmountIn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinSwapExternAmountInProtoMsg): MsgJoinSwapExternAmountIn {
    return MsgJoinSwapExternAmountIn.decode(message.value);
  },
  toProto(message: MsgJoinSwapExternAmountIn): Uint8Array {
    return MsgJoinSwapExternAmountIn.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
      value: MsgJoinSwapExternAmountIn.encode(message).finish()
    };
  }
};
function createBaseMsgJoinSwapExternAmountInResponse(): MsgJoinSwapExternAmountInResponse {
  return {
    shareOutAmount: ""
  };
}
export const MsgJoinSwapExternAmountInResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
  encode(message: MsgJoinSwapExternAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapExternAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinSwapExternAmountInResponse {
    const obj = createBaseMsgJoinSwapExternAmountInResponse();
    if (isSet(object.shareOutAmount)) obj.shareOutAmount = String(object.shareOutAmount);
    return obj;
  },
  toJSON(message: MsgJoinSwapExternAmountInResponse): unknown {
    const obj: any = {};
    message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgJoinSwapExternAmountInResponse>): MsgJoinSwapExternAmountInResponse {
    const message = createBaseMsgJoinSwapExternAmountInResponse();
    message.shareOutAmount = object.shareOutAmount ?? "";
    return message;
  },
  fromSDK(object: MsgJoinSwapExternAmountInResponseSDKType): MsgJoinSwapExternAmountInResponse {
    return {
      shareOutAmount: object?.share_out_amount
    };
  },
  fromSDKJSON(object: any): MsgJoinSwapExternAmountInResponseSDKType {
    return {
      share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : ""
    };
  },
  toSDK(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseSDKType {
    const obj: any = {};
    obj.share_out_amount = message.shareOutAmount;
    return obj;
  },
  fromAmino(object: MsgJoinSwapExternAmountInResponseAmino): MsgJoinSwapExternAmountInResponse {
    return {
      shareOutAmount: object.share_out_amount
    };
  },
  toAmino(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseAmino {
    const obj: any = {};
    obj.share_out_amount = message.shareOutAmount;
    return obj;
  },
  fromAminoMsg(object: MsgJoinSwapExternAmountInResponseAminoMsg): MsgJoinSwapExternAmountInResponse {
    return MsgJoinSwapExternAmountInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseAminoMsg {
    return {
      type: "osmosis/gamm/join-swap-extern-amount-in-response",
      value: MsgJoinSwapExternAmountInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinSwapExternAmountInResponseProtoMsg): MsgJoinSwapExternAmountInResponse {
    return MsgJoinSwapExternAmountInResponse.decode(message.value);
  },
  toProto(message: MsgJoinSwapExternAmountInResponse): Uint8Array {
    return MsgJoinSwapExternAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
      value: MsgJoinSwapExternAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgJoinSwapShareAmountOut(): MsgJoinSwapShareAmountOut {
  return {
    sender: "",
    poolId: BigInt(0),
    tokenInDenom: "",
    shareOutAmount: "",
    tokenInMaxAmount: ""
  };
}
export const MsgJoinSwapShareAmountOut = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
  encode(message: MsgJoinSwapShareAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(26).string(message.tokenInDenom);
    }
    if (message.shareOutAmount !== "") {
      writer.uint32(34).string(message.shareOutAmount);
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(42).string(message.tokenInMaxAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapShareAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenInDenom = reader.string();
          break;
        case 4:
          message.shareOutAmount = reader.string();
          break;
        case 5:
          message.tokenInMaxAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinSwapShareAmountOut {
    const obj = createBaseMsgJoinSwapShareAmountOut();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenInDenom)) obj.tokenInDenom = String(object.tokenInDenom);
    if (isSet(object.shareOutAmount)) obj.shareOutAmount = String(object.shareOutAmount);
    if (isSet(object.tokenInMaxAmount)) obj.tokenInMaxAmount = String(object.tokenInMaxAmount);
    return obj;
  },
  toJSON(message: MsgJoinSwapShareAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
    message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgJoinSwapShareAmountOut>): MsgJoinSwapShareAmountOut {
    const message = createBaseMsgJoinSwapShareAmountOut();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.shareOutAmount = object.shareOutAmount ?? "";
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    return message;
  },
  fromSDK(object: MsgJoinSwapShareAmountOutSDKType): MsgJoinSwapShareAmountOut {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      tokenInDenom: object?.token_in_denom,
      shareOutAmount: object?.share_out_amount,
      tokenInMaxAmount: object?.token_in_max_amount
    };
  },
  fromSDKJSON(object: any): MsgJoinSwapShareAmountOutSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in_denom: isSet(object.token_in_denom) ? String(object.token_in_denom) : "",
      share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
      token_in_max_amount: isSet(object.token_in_max_amount) ? String(object.token_in_max_amount) : ""
    };
  },
  toSDK(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    obj.token_in_denom = message.tokenInDenom;
    obj.share_out_amount = message.shareOutAmount;
    obj.token_in_max_amount = message.tokenInMaxAmount;
    return obj;
  },
  fromAmino(object: MsgJoinSwapShareAmountOutAmino): MsgJoinSwapShareAmountOut {
    return {
      sender: object.sender,
      poolId: BigInt(object.pool_id),
      tokenInDenom: object.token_in_denom,
      shareOutAmount: object.share_out_amount,
      tokenInMaxAmount: object.token_in_max_amount
    };
  },
  toAmino(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in_denom = message.tokenInDenom;
    obj.share_out_amount = message.shareOutAmount;
    obj.token_in_max_amount = message.tokenInMaxAmount;
    return obj;
  },
  fromAminoMsg(object: MsgJoinSwapShareAmountOutAminoMsg): MsgJoinSwapShareAmountOut {
    return MsgJoinSwapShareAmountOut.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutAminoMsg {
    return {
      type: "osmosis/gamm/join-swap-share-amount-out",
      value: MsgJoinSwapShareAmountOut.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinSwapShareAmountOutProtoMsg): MsgJoinSwapShareAmountOut {
    return MsgJoinSwapShareAmountOut.decode(message.value);
  },
  toProto(message: MsgJoinSwapShareAmountOut): Uint8Array {
    return MsgJoinSwapShareAmountOut.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
      value: MsgJoinSwapShareAmountOut.encode(message).finish()
    };
  }
};
function createBaseMsgJoinSwapShareAmountOutResponse(): MsgJoinSwapShareAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const MsgJoinSwapShareAmountOutResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
  encode(message: MsgJoinSwapShareAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapShareAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinSwapShareAmountOutResponse {
    const obj = createBaseMsgJoinSwapShareAmountOutResponse();
    if (isSet(object.tokenInAmount)) obj.tokenInAmount = String(object.tokenInAmount);
    return obj;
  },
  toJSON(message: MsgJoinSwapShareAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgJoinSwapShareAmountOutResponse>): MsgJoinSwapShareAmountOutResponse {
    const message = createBaseMsgJoinSwapShareAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromSDK(object: MsgJoinSwapShareAmountOutResponseSDKType): MsgJoinSwapShareAmountOutResponse {
    return {
      tokenInAmount: object?.token_in_amount
    };
  },
  fromSDKJSON(object: any): MsgJoinSwapShareAmountOutResponseSDKType {
    return {
      token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
    };
  },
  toSDK(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseSDKType {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount;
    return obj;
  },
  fromAmino(object: MsgJoinSwapShareAmountOutResponseAmino): MsgJoinSwapShareAmountOutResponse {
    return {
      tokenInAmount: object.token_in_amount
    };
  },
  toAmino(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(object: MsgJoinSwapShareAmountOutResponseAminoMsg): MsgJoinSwapShareAmountOutResponse {
    return MsgJoinSwapShareAmountOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseAminoMsg {
    return {
      type: "osmosis/gamm/join-swap-share-amount-out-response",
      value: MsgJoinSwapShareAmountOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinSwapShareAmountOutResponseProtoMsg): MsgJoinSwapShareAmountOutResponse {
    return MsgJoinSwapShareAmountOutResponse.decode(message.value);
  },
  toProto(message: MsgJoinSwapShareAmountOutResponse): Uint8Array {
    return MsgJoinSwapShareAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
      value: MsgJoinSwapShareAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExitSwapShareAmountIn(): MsgExitSwapShareAmountIn {
  return {
    sender: "",
    poolId: BigInt(0),
    tokenOutDenom: "",
    shareInAmount: "",
    tokenOutMinAmount: ""
  };
}
export const MsgExitSwapShareAmountIn = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
  encode(message: MsgExitSwapShareAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    if (message.shareInAmount !== "") {
      writer.uint32(34).string(message.shareInAmount);
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(42).string(message.tokenOutMinAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapShareAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapShareAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        case 4:
          message.shareInAmount = reader.string();
          break;
        case 5:
          message.tokenOutMinAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitSwapShareAmountIn {
    const obj = createBaseMsgExitSwapShareAmountIn();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenOutDenom)) obj.tokenOutDenom = String(object.tokenOutDenom);
    if (isSet(object.shareInAmount)) obj.shareInAmount = String(object.shareInAmount);
    if (isSet(object.tokenOutMinAmount)) obj.tokenOutMinAmount = String(object.tokenOutMinAmount);
    return obj;
  },
  toJSON(message: MsgExitSwapShareAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
    message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExitSwapShareAmountIn>): MsgExitSwapShareAmountIn {
    const message = createBaseMsgExitSwapShareAmountIn();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    message.shareInAmount = object.shareInAmount ?? "";
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    return message;
  },
  fromSDK(object: MsgExitSwapShareAmountInSDKType): MsgExitSwapShareAmountIn {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      tokenOutDenom: object?.token_out_denom,
      shareInAmount: object?.share_in_amount,
      tokenOutMinAmount: object?.token_out_min_amount
    };
  },
  fromSDKJSON(object: any): MsgExitSwapShareAmountInSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_out_denom: isSet(object.token_out_denom) ? String(object.token_out_denom) : "",
      share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : "",
      token_out_min_amount: isSet(object.token_out_min_amount) ? String(object.token_out_min_amount) : ""
    };
  },
  toSDK(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    obj.token_out_denom = message.tokenOutDenom;
    obj.share_in_amount = message.shareInAmount;
    obj.token_out_min_amount = message.tokenOutMinAmount;
    return obj;
  },
  fromAmino(object: MsgExitSwapShareAmountInAmino): MsgExitSwapShareAmountIn {
    return {
      sender: object.sender,
      poolId: BigInt(object.pool_id),
      tokenOutDenom: object.token_out_denom,
      shareInAmount: object.share_in_amount,
      tokenOutMinAmount: object.token_out_min_amount
    };
  },
  toAmino(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_out_denom = message.tokenOutDenom;
    obj.share_in_amount = message.shareInAmount;
    obj.token_out_min_amount = message.tokenOutMinAmount;
    return obj;
  },
  fromAminoMsg(object: MsgExitSwapShareAmountInAminoMsg): MsgExitSwapShareAmountIn {
    return MsgExitSwapShareAmountIn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInAminoMsg {
    return {
      type: "osmosis/gamm/exit-swap-share-amount-in",
      value: MsgExitSwapShareAmountIn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitSwapShareAmountInProtoMsg): MsgExitSwapShareAmountIn {
    return MsgExitSwapShareAmountIn.decode(message.value);
  },
  toProto(message: MsgExitSwapShareAmountIn): Uint8Array {
    return MsgExitSwapShareAmountIn.encode(message).finish();
  },
  toProtoMsg(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
      value: MsgExitSwapShareAmountIn.encode(message).finish()
    };
  }
};
function createBaseMsgExitSwapShareAmountInResponse(): MsgExitSwapShareAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const MsgExitSwapShareAmountInResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
  encode(message: MsgExitSwapShareAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapShareAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitSwapShareAmountInResponse {
    const obj = createBaseMsgExitSwapShareAmountInResponse();
    if (isSet(object.tokenOutAmount)) obj.tokenOutAmount = String(object.tokenOutAmount);
    return obj;
  },
  toJSON(message: MsgExitSwapShareAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExitSwapShareAmountInResponse>): MsgExitSwapShareAmountInResponse {
    const message = createBaseMsgExitSwapShareAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromSDK(object: MsgExitSwapShareAmountInResponseSDKType): MsgExitSwapShareAmountInResponse {
    return {
      tokenOutAmount: object?.token_out_amount
    };
  },
  fromSDKJSON(object: any): MsgExitSwapShareAmountInResponseSDKType {
    return {
      token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
    };
  },
  toSDK(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseSDKType {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount;
    return obj;
  },
  fromAmino(object: MsgExitSwapShareAmountInResponseAmino): MsgExitSwapShareAmountInResponse {
    return {
      tokenOutAmount: object.token_out_amount
    };
  },
  toAmino(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: MsgExitSwapShareAmountInResponseAminoMsg): MsgExitSwapShareAmountInResponse {
    return MsgExitSwapShareAmountInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseAminoMsg {
    return {
      type: "osmosis/gamm/exit-swap-share-amount-in-response",
      value: MsgExitSwapShareAmountInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitSwapShareAmountInResponseProtoMsg): MsgExitSwapShareAmountInResponse {
    return MsgExitSwapShareAmountInResponse.decode(message.value);
  },
  toProto(message: MsgExitSwapShareAmountInResponse): Uint8Array {
    return MsgExitSwapShareAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
      value: MsgExitSwapShareAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExitSwapExternAmountOut(): MsgExitSwapExternAmountOut {
  return {
    sender: "",
    poolId: BigInt(0),
    tokenOut: Coin.fromPartial({}),
    shareInMaxAmount: ""
  };
}
export const MsgExitSwapExternAmountOut = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
  encode(message: MsgExitSwapExternAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.shareInMaxAmount !== "") {
      writer.uint32(34).string(message.shareInMaxAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapExternAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapExternAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.shareInMaxAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitSwapExternAmountOut {
    const obj = createBaseMsgExitSwapExternAmountOut();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.tokenOut)) obj.tokenOut = Coin.fromJSON(object.tokenOut);
    if (isSet(object.shareInMaxAmount)) obj.shareInMaxAmount = String(object.shareInMaxAmount);
    return obj;
  },
  toJSON(message: MsgExitSwapExternAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    message.shareInMaxAmount !== undefined && (obj.shareInMaxAmount = message.shareInMaxAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExitSwapExternAmountOut>): MsgExitSwapExternAmountOut {
    const message = createBaseMsgExitSwapExternAmountOut();
    message.sender = object.sender ?? "";
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.tokenOut !== undefined && object.tokenOut !== null) {
      message.tokenOut = Coin.fromPartial(object.tokenOut);
    }
    message.shareInMaxAmount = object.shareInMaxAmount ?? "";
    return message;
  },
  fromSDK(object: MsgExitSwapExternAmountOutSDKType): MsgExitSwapExternAmountOut {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      tokenOut: object.token_out ? Coin.fromSDK(object.token_out) : undefined,
      shareInMaxAmount: object?.share_in_max_amount
    };
  },
  fromSDKJSON(object: any): MsgExitSwapExternAmountOutSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_out: isSet(object.token_out) ? Coin.fromSDKJSON(object.token_out) : undefined,
      share_in_max_amount: isSet(object.share_in_max_amount) ? String(object.share_in_max_amount) : ""
    };
  },
  toSDK(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    message.tokenOut !== undefined && (obj.token_out = message.tokenOut ? Coin.toSDK(message.tokenOut) : undefined);
    obj.share_in_max_amount = message.shareInMaxAmount;
    return obj;
  },
  fromAmino(object: MsgExitSwapExternAmountOutAmino): MsgExitSwapExternAmountOut {
    return {
      sender: object.sender,
      poolId: BigInt(object.pool_id),
      tokenOut: object?.token_out ? Coin.fromAmino(object.token_out) : undefined,
      shareInMaxAmount: object.share_in_max_amount
    };
  },
  toAmino(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    obj.share_in_max_amount = message.shareInMaxAmount;
    return obj;
  },
  fromAminoMsg(object: MsgExitSwapExternAmountOutAminoMsg): MsgExitSwapExternAmountOut {
    return MsgExitSwapExternAmountOut.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutAminoMsg {
    return {
      type: "osmosis/gamm/exit-swap-extern-amount-out",
      value: MsgExitSwapExternAmountOut.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitSwapExternAmountOutProtoMsg): MsgExitSwapExternAmountOut {
    return MsgExitSwapExternAmountOut.decode(message.value);
  },
  toProto(message: MsgExitSwapExternAmountOut): Uint8Array {
    return MsgExitSwapExternAmountOut.encode(message).finish();
  },
  toProtoMsg(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
      value: MsgExitSwapExternAmountOut.encode(message).finish()
    };
  }
};
function createBaseMsgExitSwapExternAmountOutResponse(): MsgExitSwapExternAmountOutResponse {
  return {
    shareInAmount: ""
  };
}
export const MsgExitSwapExternAmountOutResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
  encode(message: MsgExitSwapExternAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareInAmount !== "") {
      writer.uint32(10).string(message.shareInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapExternAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitSwapExternAmountOutResponse {
    const obj = createBaseMsgExitSwapExternAmountOutResponse();
    if (isSet(object.shareInAmount)) obj.shareInAmount = String(object.shareInAmount);
    return obj;
  },
  toJSON(message: MsgExitSwapExternAmountOutResponse): unknown {
    const obj: any = {};
    message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExitSwapExternAmountOutResponse>): MsgExitSwapExternAmountOutResponse {
    const message = createBaseMsgExitSwapExternAmountOutResponse();
    message.shareInAmount = object.shareInAmount ?? "";
    return message;
  },
  fromSDK(object: MsgExitSwapExternAmountOutResponseSDKType): MsgExitSwapExternAmountOutResponse {
    return {
      shareInAmount: object?.share_in_amount
    };
  },
  fromSDKJSON(object: any): MsgExitSwapExternAmountOutResponseSDKType {
    return {
      share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : ""
    };
  },
  toSDK(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseSDKType {
    const obj: any = {};
    obj.share_in_amount = message.shareInAmount;
    return obj;
  },
  fromAmino(object: MsgExitSwapExternAmountOutResponseAmino): MsgExitSwapExternAmountOutResponse {
    return {
      shareInAmount: object.share_in_amount
    };
  },
  toAmino(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseAmino {
    const obj: any = {};
    obj.share_in_amount = message.shareInAmount;
    return obj;
  },
  fromAminoMsg(object: MsgExitSwapExternAmountOutResponseAminoMsg): MsgExitSwapExternAmountOutResponse {
    return MsgExitSwapExternAmountOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseAminoMsg {
    return {
      type: "osmosis/gamm/exit-swap-extern-amount-out-response",
      value: MsgExitSwapExternAmountOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitSwapExternAmountOutResponseProtoMsg): MsgExitSwapExternAmountOutResponse {
    return MsgExitSwapExternAmountOutResponse.decode(message.value);
  },
  toProto(message: MsgExitSwapExternAmountOutResponse): Uint8Array {
    return MsgExitSwapExternAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
      value: MsgExitSwapExternAmountOutResponse.encode(message).finish()
    };
  }
};