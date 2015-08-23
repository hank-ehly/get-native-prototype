class LanguageModulesController < ApplicationController
  before_action :set_language_module, only: [:show, :edit, :update, :destroy]

  # GET /language_modules
  # GET /language_modules.json
  def index

    if params[:language] && params[:user_id]
      ## calling from userHome
      u = User.find(params[:user_id])
      l = Language.find_by(name: params[:language])
      @language_module = LanguageModule.where(user_id: u.id, language_id: l.id)
    end

    render json: {
      languageModule: @language_module
    }

  end

  # GET /language_modules/1
  # GET /language_modules/1.json
  def show
  end

  # GET /language_modules/new
  def new
    @language_module = LanguageModule.new
  end

  # GET /language_modules/1/edit
  def edit
  end

  # POST /language_modules
  # POST /language_modules.json
  def create
    @language_module = LanguageModule.new(language_module_params)
    if @language_module.save
      render json: {
        status: :created,
        location: @language_module,
        language_module: @language_module,
        notice: 'Language module was successfully created.'
      }
    else
      render json: {
        errors: @language_module.errors,
        status: :unprocessable_entity
      }
    end
  end

  # PATCH/PUT /language_modules/1
  # PATCH/PUT /language_modules/1.json
  def update
    
      if @language_module.update(language_module_params)
        render json: {
          status: :ok,
          location: @language_module,
          language_module: @language_module,
          notice: 'Language module was successfully updated.'
        }
      else
        render json: {
          errors: @language_module.errors,
          status: :unprocessable_entity
        }
      end
    
  end

  # DELETE /language_modules/1
  # DELETE /language_modules/1.json
  def destroy
    @language_module.destroy
    respond_to do |format|
      format.html { redirect_to language_modules_url, notice: 'Language module was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_language_module
      @language_module = LanguageModule.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def language_module_params
      params.require(:language_module).permit(:user_id, :cue_id, :language_id)
    end
end
