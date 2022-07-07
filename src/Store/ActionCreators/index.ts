import * as UserActionsCreator from "./user";
import * as TodoActionsCreator from "./todo";

const actions = { ...TodoActionsCreator, ...UserActionsCreator };

export default actions;
