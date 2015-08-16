class WritingPromptsController < ApplicationController
  before_action :set_writing_prompt, only: [:show, :edit, :update, :destroy]

  # GET /writing_prompts
  # GET /writing_prompts.json
  def index
    @writing_prompts = WritingPrompt.all
  end

  # GET /writing_prompts/1
  # GET /writing_prompts/1.json
  def show
  end

  # GET /writing_prompts/new
  def new
    @writing_prompt = WritingPrompt.new
  end

  # GET /writing_prompts/1/edit
  def edit
  end

  # POST /writing_prompts
  # POST /writing_prompts.json
  def create
    @writing_prompt = WritingPrompt.new(writing_prompt_params)

    respond_to do |format|
      if @writing_prompt.save
        format.html { redirect_to @writing_prompt, notice: 'Writing prompt was successfully created.' }
        format.json { render :show, status: :created, location: @writing_prompt }
      else
        format.html { render :new }
        format.json { render json: @writing_prompt.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /writing_prompts/1
  # PATCH/PUT /writing_prompts/1.json
  def update
    respond_to do |format|
      if @writing_prompt.update(writing_prompt_params)
        format.html { redirect_to @writing_prompt, notice: 'Writing prompt was successfully updated.' }
        format.json { render :show, status: :ok, location: @writing_prompt }
      else
        format.html { render :edit }
        format.json { render json: @writing_prompt.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /writing_prompts/1
  # DELETE /writing_prompts/1.json
  def destroy
    @writing_prompt.destroy
    respond_to do |format|
      format.html { redirect_to writing_prompts_url, notice: 'Writing prompt was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_writing_prompt
      @writing_prompt = WritingPrompt.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def writing_prompt_params
      params.require(:writing_prompt).permit(:video_id, :prompt, :example)
    end
end
