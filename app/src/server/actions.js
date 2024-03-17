export const stripePayment = async (tier, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }
  const userEmail = context.user.email;
  if (!userEmail) {
    throw new HttpError(
      403,
      'User needs an email to make a payment. If using the usernameAndPassword Auth method, switch to an Auth method that provides an email.'
    );
  }

  let priceId;
  if (tier === TierIds.HOBBY) {
    priceId = process.env.HOBBY_SUBSCRIPTION_PRICE_ID;
  } else if (tier === TierIds.PRO) {
    priceId = process.env.PRO_SUBSCRIPTION_PRICE_ID;
  } else {
    throw new HttpError(400, 'Invalid tier');
  }

  let customer;
  let session;
  try {
    customer = await fetchStripeCustomer(userEmail);
    session = await createStripeCheckoutSession({
      priceId,
      customerId: customer.id,
    });
  } catch (error) {
    throw new HttpError(500, error.message);
  }

  await context.entities.User.update({
    where: {
      id: context.user.id,
    },
    data: {
      checkoutSessionId: session.id,
      stripeId: customer.id,
    },
  });

  return {
    sessionUrl: session.url,
    sessionId: session.id,
  };
};

export const updateCurrentUser = async (user, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.User.update({
    where: {
      id: context.user.id,
    },
    data: user,
  });
};

export const updateUserById = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.User.update({
    where: {
      id: args.id,
    },
    data: args,
  });
}

export const createRestaurant = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Restaurant.create({
    data: {
      ...args,
    }
  })
}

