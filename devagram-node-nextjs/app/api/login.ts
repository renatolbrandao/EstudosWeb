import type {NextApiRequest, NextApiResponse} from 'next';


export default function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
   res.status(200).json({name: 'John Doe'});
}



export  function login (
    req1: NextApiRequest,
    res1: NextApiResponse
)  {
    if (req1.method === 'POST'){
        const {login, senha} = req1.body;

        if (login === 'admin@admin.com' && senha === 'Admin@123'){
            res1.status(200).json({msg: 'Usuario autenticado com sucesso'});
        }
        return res1.status(400).json({erro: 'Usuario ou senha não encontrados'});
    }
    return res1.status(405).json({erro: 'Metodo informado não é valido'});
}