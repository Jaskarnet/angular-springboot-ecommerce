package net.jaskar.ecommerce.service;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import net.jaskar.ecommerce.dto.PaymentInfo;
import net.jaskar.ecommerce.dto.Purchase;
import net.jaskar.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
