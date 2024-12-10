import "../../styles/Wishlist.css";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	getWishList,
	removeWishList,
} from "../../redux/Actions/wishListAction";
import { addToCart } from "../../redux/Actions/cartAction";

function Wishlist() {
	const dispatch = useDispatch();
	const { wishList } = useSelector((state) => state.wishListAuth);

	useEffect(() => {
		dispatch(getWishList());
	}, [dispatch]);

	const hasItems =
		Array.isArray(wishList?.products) && wishList.products.length > 0;

	return (
		<>
			<Header />
			<div className="wishlist-container">
				<h2 className="wishlist-title">Your Wishlist</h2>
				<p className="wishlist-subtitle">Keep track of items you love</p>

				{hasItems ? (
					<div className="wishlist-list">
						{wishList.products.map((product) => (
							<div
								className="wishlist-horizontal-card"
								key={product._id || product.id}
							>
								{/* Product Image */}
								<div className="wishlist-image-wrapper">
									<img
										src={product?.image?.url}
										alt={product?.name}
										className="wishlist-image"
									/>
								</div>

								{/* Product Details */}
								<div className="wishlist-details">
									<h3 className="wishlist-name">{product?.name}</h3>
									<p>{product?.description}</p>
									<p className="wishlist-price">$ {product?.price}</p>
								</div>

								{/* Action Buttons */}
								<div className="wishlist-actions">
									<button
										className="wishlist-add-to-cart"
										onClick={() => dispatch(addToCart(product?._id, 1))}
									>
										Add to Bag
									</button>
									<button
										className="wishlist-remove"
										onClick={() => dispatch(removeWishList(product?._id))}
									>
										🗑
									</button>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="wishlist-empty">
						<p className="wishlist-empty-message">
							No items in your wishlist. <a href="/shop">Continue Shopping</a>
						</p>
					</div>
				)}

				{hasItems && (
					<div className="wishlist-add-all">
						<button>Add All to Bag</button>
					</div>
				)}
			</div>
		</>
	);
}

export default Wishlist;
