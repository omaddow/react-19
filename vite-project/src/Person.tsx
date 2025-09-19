interface Props {
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries;
}

export enum Countries {
    Somalia = "Somalia",
    France = "France",
    India = "India",
    UnitedStates = "United States",
}
export const User = (props: Props) => {
    // const { users, updateUser, deleteUser } = useContext(UserContext);
    return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>This person {props.isMarried ? "is married" : "is single"}</p>
        <p>Country of Origin: {props.country}</p>
    </div>
    );
};