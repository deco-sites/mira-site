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

// const isEmailValid = (email: string): boolean => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

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

  console.log("Resultado do POST: ", response.json())

  return response.json();
};

export default async function submitRvsp(data: RsvpData, _req: Request, ctx: AppContext) {
  try {
    // if (!isEmailValid(data.email)) {
    //   return {
    //     ok: false,
    //     message: "Email inválido",
    //   };
    // }

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
    } else {
      return {
        ok: true,
        status: "send",
      };
    }
  } catch (error) {
    console.error("error", error);

    return {
      ok: false,
      status: "error",
    };
  }
};