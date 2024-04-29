import CompanyItem from "../../../components/CompanyItem/CompanyItem";

export default function Page({params}: { params: { name: string } }) {
    params.name = decodeURI(params.name);
    return <CompanyItem params={params}/>
}
