import { Metadata } from "next";
import EditPage from "./EditPage";

export const metadata: Metadata = {
  title: "ویرایش",
};

const Edit = async (props: { params: Promise<{ contactID: string }> }) => {
  const params = await props.params;
  return <EditPage id={params.contactID}/>;
};
export default Edit;