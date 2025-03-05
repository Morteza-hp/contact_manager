import { Metadata } from "next";
import DetailPage from "./DetailPage";

export const metadata: Metadata = {
  title: "جزئیات",
};

const Detail = async (props: { params: Promise<{ contactID: string }> }) => {
  const params = await props.params;
  return <DetailPage id={params.contactID} />;
};
export default Detail;
