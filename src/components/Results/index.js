export const Result = ({name, nb_department, code_department, population, setCodeDep}) => {
    const handleClick = async () => {
        setCodeDep(code_department);
    }
    return (
        <>
            <li className='result' onClick={handleClick} >
                <span>
                    <p>{name} - {nb_department}</p>
                </span>
                <span>
                    <p>Code - {code_department}</p>
                </span>
                <span>
                    <p>Population - {population}</p>
                </span>
            </li>
        </>
    )
}