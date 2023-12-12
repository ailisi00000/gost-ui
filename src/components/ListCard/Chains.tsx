import { chains } from "../../api";
import { ChainConfig } from "../../api/types";
import ListCard from ".";
import viewChain from "../viewer/chain";
import { useContext } from "react";
import Ctx from "../../uitls/ctx";

// const record = (value: any, record: ChainConfig, index: number) => {
//   const { hops } = record;
//   const _hops = hops.map((hop) => {
//     const { nodes } = hop;
//     const _nodes = nodes.map((node) => {
//       const {
//         addr,
//         connector: { type: connectorType },
//         dialer: { type: dialerType },
//       } = node;
//       return `${connectorType}${dialerType ? "+" + dialerType : ""}://${addr}`;
//     });
//     return _nodes.join(",");
//   });
//   return _hops.join(" -> ");
// };
const ChainCard: React.FC = (props) => {
  const { gostConfig } = useContext(Ctx);
  const _prop = {
    module: 'chain',
    renderConfig: (value: any, record: ChainConfig, index: number) => {
      return viewChain.call(gostConfig!, record);
    },
  };
  return <ListCard {..._prop} />;
};
export default ChainCard;
