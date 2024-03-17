export const getDailyStats = async (_args, context) => {
    if (!context.user?.isAdmin) {
        throw new HttpError(401);
    }
    const dailyStats = await context.entities.DailyStats.findFirstOrThrow({
        orderBy: {
            date: 'desc',
        },
        include: {
            sources: true,
        },
    });
}

export const getPaginatedUsers = async (args, context) => {
    if (!context.user?.isAdmin) {
        throw new HttpError(401);
    }
    return context.entities.User.findMany({
        skip: args.skip,
        take: args.take,
    });
}

export const getRestaurant = async (args, context) => {
    return context.entities.Restaurant.findMany({
        where: {
            id: {
                equals: args.id,
            }
        }
    })
}