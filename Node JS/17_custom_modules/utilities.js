const replaceTemplate = (temp, product) => {
    let output = temp.replace('{{%NAME%}}', product.name);
    output = output.replace('{{%PRICE%}}', product.price);
    output = output.replace('{{%ID%}}', product.id);
    return output;
}

module.exports = replaceTemplate;