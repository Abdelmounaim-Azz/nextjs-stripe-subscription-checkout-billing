import axios from "axios";
const Success = () => {
  return <div></div>;
};
export default Success;
export async function getServerSideProps(context) {
  const { session_id } = context.query;
  const { data } = await axios.post("http://localhost:4242/success", {
    sessionId: session_id,
  });
  const res = await axios.post("http://localhost:4242/customer-portal", {
    customerId: data.customer.id,
  });
  return {
    redirect: {
      destination: res.data?.url,
      permanent: false,
    },
  };
}
