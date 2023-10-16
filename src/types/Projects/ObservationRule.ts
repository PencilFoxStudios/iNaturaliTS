import { ObservationRuleOperandType } from "./ObservationRuleOperandType";
import { ObservationRuleOperator } from "./ObservationRuleOperator";

export interface ObservationRule {
    id: number,
    operator: ObservationRuleOperator,
    operand_type: ObservationRuleOperandType,
    operand_id: number
}