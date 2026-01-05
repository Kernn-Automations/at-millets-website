import React from "react";
import SupplyChainIntroSection from "../../components/supplychain/SupplyChainIntroSection";
import SupplyChainFlowSection from "../../components/supplychain/SupplyChainFlowSection";
import QualityAssuranceSection from "../../components/supplychain/QualityAssuranceSection";

const SupplyChain = () => {
  return (
    <div>
      <SupplyChainIntroSection />
      <SupplyChainFlowSection />
      <QualityAssuranceSection />
    </div>
  );
};

export default SupplyChain;
