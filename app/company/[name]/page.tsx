import CompanyItem from "../../../components/CompanyItem/CompanyItem";

export default function Page({params}: { params: { name: string } }) {
    return <CompanyItem params={params}/>
}
