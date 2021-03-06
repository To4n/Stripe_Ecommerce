import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconBottom, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyle from './styles';
const Product = ({product, onAddToCart}) => {
    const classes = useStyle();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}  image={product.media.source} title={product.name}></CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p"></Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardAction}>
                <IconButton aria-label="Add to Card" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
        
    )
}
export default Product;
