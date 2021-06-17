import ChoosePlan from "../../components/ChoosePlan/ChoosePlan";
import { Title } from "../../utils/use-title";
const MonthlyPlan = () => {
  return (
    <>
      <Title
        title='PROSPECAT - Choose your subscription plan.'
        content='Choose your monthly subscription plan and start finding leads for your business.'
      />
      <ChoosePlan />
    </>
  );
};
export default MonthlyPlan;
