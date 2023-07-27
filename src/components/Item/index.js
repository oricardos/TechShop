import React, { useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { AmountInput } from "../AmountInput";
import { Button } from "../Button";

export const Item = ({ name, img, price, description }) => {
  const [amount, setAmount] = useState(1);
  const [finalPrice, setFinalPrice] = useState(0);

  const updateAmount = (newAmount) => {
    setAmount(newAmount);
    calculateFinalPrice(newAmount);
  };

  const calculateFinalPrice = (amount) => {
    setFinalPrice(price * amount);
  };

  useEffect(() => {
    updateAmount(amount);
  }, []);

  return (
    <View style={styles.wrapperItem}>
      <Image source={img} style={styles.itemImg} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
        <Text style={styles.itemPrice}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>

        <View style={styles.addItem}>
          <View style={styles.item}>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>Quantidade: </Text>
              <AmountInput setAmount={updateAmount} value={amount} />
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>Total:</Text>
              <Text style={styles.finalPrice}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(finalPrice)}
              </Text>
            </View>
          </View>

          <Button text={"Adicionar"} />
        </View>
      </View>

      <View style={styles.divider} />
    </View>
  );
};
