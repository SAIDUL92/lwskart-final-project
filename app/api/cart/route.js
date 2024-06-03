import { userModel } from "@/models/userModel";
import { dbConnect } from "@/service";

export const PUT = async (req, res) => {
    if (req.method === 'PUT') {
        const { userId, productId, quantity } = req.body;

        if (!userId || !productId || !quantity) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
            await dbConnect();

            const user = await userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const cartItem = user.cart.find(item => item.productId.toString() === productId);
            if (cartItem) {
                cartItem.quantity = quantity;
            } else {
                user.cart.push({ productId, quantity });
            }

            await user.save();

            res.status(200).json({ message: 'Cart updated successfully' });
        } catch (error) {
            console.error('Error updating cart:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
