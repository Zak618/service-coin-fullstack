from fastapi import APIRouter
from src.init import cmc_client

router = APIRouter(
    prefix="/cryptocurrencies"
)

@router.get("")
async def get_cryptocurriencies():
    return await cmc_client.get_listings()
    

@router.get("/{currency_id}")
async def get_cryptocurriency(currency_id):
    return await cmc_client.get_currency(currency_id)