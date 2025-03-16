package net.jaskar.ecommerce.dto;

import lombok.Data;
import net.jaskar.ecommerce.entity.Address;
import net.jaskar.ecommerce.entity.Customer;
import net.jaskar.ecommerce.entity.Order;
import net.jaskar.ecommerce.entity.OrderItem;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
