import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb';

export const dynamic = 'force-dynamic';

const dynamoClient = new DynamoDBClient({});

async function getByTag(tag: string) {
  try {
    const { Items } = await dynamoClient.send(
      new QueryCommand({
        TableName: process.env.CACHE_DYNAMO_TABLE,
        KeyConditionExpression: '#tag = :tag',
        ExpressionAttributeNames: {
          '#tag': 'tag',
        },
        ExpressionAttributeValues: {
          ':tag': { S: `${process.env.NEXT_BUILD_ID}/${tag}` },
        },
      })
    );
    return (
      // We need to remove the buildId from the path
      Items?.map(
        ({ path: { S: key } }) =>
          key?.replace(`${process.env.NEXT_BUILD_ID}/`, '') ?? ''
      ) ?? []
    );
  } catch (e) {
    console.error(e);
    return [];
  }
}
export async function GET() {
  return Response.json({
    tags: await getByTag('time'),
  });
}
