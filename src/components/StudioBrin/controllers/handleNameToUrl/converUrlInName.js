// função atende aos critérios de url da cloudnary, para outros padrõs reajuste esta função para obter os nomes das partes do produto
function convertUrlInName (item) {
  const partsUrl = item.split('/');
  const lastPartUrl = partsUrl.pop();
  const namePartProduct = lastPartUrl.split('_')[0];
  return namePartProduct;
}

export default convertUrlInName;