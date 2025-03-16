package net.jaskar.ecommerce.service;

import net.jaskar.ecommerce.dto.Purchase;
import net.jaskar.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
