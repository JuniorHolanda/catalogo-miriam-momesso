
const showProduct = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await getProducts();
                setProducts(response);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);
    
    return (
        <div>
            
        </div>
    )
}

    export default showProduct
