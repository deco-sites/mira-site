import { AppContext } from "$store/apps/site.ts";

interface RsvpData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  trainingInterest: string;
  trainingDate: string;
}

const fetchData = async (
  url: string,
  method: string,
  _ctx: AppContext,
  body?: object,
) => {
  const airtableToken = Deno.env.get("AIRTABLE_KEY");

  const headers = {
    "Authorization": `Bearer ${airtableToken}`,
    "Content-Type": "application/json",
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  return response.json();
};

export default async (data: RsvpData, _req: Request, ctx: AppContext) => {
  try{
    const url =
      `https://api.airtable.com/v0/${ctx.airtableBase}/tbla9t6kNxKI8AGwA`;
    const createRecord = await fetchData(url, "POST", ctx, {
      "records": [
        {
          "fields": {
            "Name": data.name,
            "Empresa": data.company,
            "Email": data.email,
            "Telefone": data.phone,
            "Necessidade": data.message,
            "Treinamento": data.trainingInterest,
            "Agendamento": data.trainingDate,
          },
        },
      ],
    });
    if (createRecord?.error) {
      return {
        ok: false,
        status: "error",
      };
    }
  }
  catch (error) {
    // TODO: How to log to Hyperdx?
    console.error("error", error);

    return {
      ok: false,
      status: "error",
    };
  }
};